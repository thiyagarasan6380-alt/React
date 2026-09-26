import java.util.*;

public class Main {
    public static void main(String[] args) {

        boolean running = true;

        Scanner sc = new Scanner(System.in);
        Student s1 = null;
        Project p1 = null;

        Application app1 = null;
        Team team1 = null;

        User u1 = new Admin();
        u1.displayRole();
        User u2 = new Student();
        u2.displayRole();

        System.out.println("-----------STUDENT PROJECT COLLABORATION HUB-----------");

        while (running) {
            System.out.println("1. Create Student");
            System.out.println("2. Create Project");
            System.out.println("3. Match Skills");
            System.out.println("4. Apply for Project");
            System.out.println("5. Form Team");
            System.out.println("6. view Team");
            System.out.println("7. Exit");

            System.out.print("Enter Choice: ");

            int choice = sc.nextInt();
            sc.nextLine();

            switch (choice) {

                case 1:
                    System.out.println("Create Student Selected");

                    s1 = new Student();

                    System.out.print("Enter Student Name : ");
                    String studentName = sc.nextLine();
                    System.out.print("Enter Student Skill : ");
                    String studentSkill = sc.nextLine();

                    s1.setName(studentName);
                    s1.setSkill(studentSkill);

                    System.out.println("Student Detail");
                    System.out.println("Student Name : " + s1.getName());
                    System.out.println("Student Skill : " + s1.getSkill());

                    break;

                case 2:
                    System.out.println("Create Project Selected");

                    p1 = new Project();
                    System.out.print("Enter Project Name : ");
                    String projectName = sc.nextLine();
                    System.out.print("Enter Required Skill : ");
                    String requiredSkill = sc.nextLine();

                    p1.setProjectName(projectName);
                    p1.setRequiredSkill(requiredSkill);

                    System.out.println("Successfully Created Project");
                    System.out.println("ProjectName : " + p1.getProjectName());
                    System.out.println("RequiredSkill : " + p1.getRequiredSkill());

                    break;

                case 3:
                    if (s1 == null || p1 == null) {
                        System.out.println("Please Enter Student and Project first");
                    } else if (s1.getSkill().equalsIgnoreCase(p1.getRequiredSkill())) {
                        System.out.println("Student is Eligible for the Project");
                    } else {
                        System.out.println("Skill doesn't Match");
                    }
                    break;

                case 4:

                    if (s1 == null || p1 == null) {
                        System.out.println("Create Student and Project first");
                    } else {

                        app1 = new Application();

                        app1.setStudent(s1);
                        app1.setProject(p1);

                        System.out.println("Application Submitted");
                        System.out.println(
                                app1.getStudent().getName() + " applied for " + app1.getProject().getProjectName());
                    }

                    break;
                case 5:

                    if (app1 == null) {
                        System.out.println("Apply for a project first");
                    } else {

                        team1 = new Team();
                        team1.setTeamName("LowCortisol");
                        team1.addMember(app1.getStudent());
                        System.out.println("Team Formed Successfully");
                    }

                    break;
                case 6:

                    if (team1 == null) {
                        System.out.println("No Team Available");
                    } else {

                        System.out.println("Team Name: " + team1.getTeamName());
                        System.out.println("Members:");
                        for (Student s : team1.getMembers()) {
                            System.out.println(s.getName());
                        }
                    }
                    break;
                case 7:
                    System.out.println("Exiting...");
                    running = false;
                    break;

                default:
                    System.out.println("Invalid Choice");

            }

        }
        sc.close();
    }
}
