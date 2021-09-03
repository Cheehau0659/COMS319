package def;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;


public class Tester {
	public static void main(String[] args) throws InterruptedException {
		//Thread t;
		int testSpeed = 1500; 
		System.setProperty("webdriver.chrome.driver",
				"/Users/limwe/Downloads/Driver/chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		String baseUrl = "http://coms-319-t13.cs.iastate.edu/mainPage.html";
		//String baseUrl = "file:///C:/Users/limwe/Desktop/Git/g13/mainPage.html";

		driver.get(baseUrl);
		
		if (driver.getTitle().contentEquals("G13 Project")) System.out.println("Title Test Passed!");
		else System.out.println("Title Test Failed!");
		// -------------------------------------------Parse Tree Designer Test ---------------------------------------- 
		Thread.sleep(testSpeed);

		driver.findElement(By.id("toParseTreeDesigner")).click();
		if (driver.getTitle().contentEquals("Parse Tree Designer")) System.out.println("Title Test Passed!");
		else System.out.println("Title Test Failed!");
		//driver.get(By.);
		Thread.sleep(testSpeed);
		
		driver.findElement(By.id("sideNav")).click();
		Thread.sleep(testSpeed);
		driver.findElement(By.id("myBtn")).click();
		Thread.sleep(testSpeed);
		driver.findElement(By.id("closeInst")).click();
		Thread.sleep(testSpeed);
		driver.findElement(By.id("closebtn")).click();
		Thread.sleep(testSpeed);
		if (driver.getTitle().contentEquals("Parse Tree Designer")) System.out.println("SidePanel Test Passed!");
		else System.out.println("SidePanel Test Failed!");

		
		driver.findElement(By.id("toMain")).click();
		Thread.sleep(testSpeed);
		
		
		// -------------------------------------------FSM Designer Test ----------------------------------------
		driver.findElement(By.id("toFSMDesigner")).click();
		if (driver.getTitle().contentEquals("FSM Designer")) System.out.println("Title Test Passed!");
		else System.out.println("Title Test Failed!");
		Thread.sleep(testSpeed);
		
		driver.findElement(By.id("sideNav")).click();
		Thread.sleep(testSpeed);
		driver.findElement(By.id("myBtn")).click();
		Thread.sleep(testSpeed);
		driver.findElement(By.id("closeInst")).click();
		Thread.sleep(testSpeed);
		driver.findElement(By.id("closebtn")).click();
		Thread.sleep(testSpeed);
		if (driver.getTitle().contentEquals("Parse Tree Designer")) System.out.println("SidePanel Test Passed!");
		else System.out.println("SidePanel Test Failed!");

		driver.findElement(By.id("toMain")).click();
		Thread.sleep(testSpeed);
		
		
		
		// -------------------------------------------Feedback Test	-------------------------------------------	 
		driver.findElement(By.id("toFeedback")).click();
		if (driver.getTitle().contentEquals("feedback")) System.out.println("Title Test Passed!");
		else System.out.println("Title Test Failed!");
		Thread.sleep(testSpeed);
		// close Chrome
		driver.close();
		

	}
}
