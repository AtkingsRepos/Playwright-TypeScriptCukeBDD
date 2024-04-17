pipeline
{
agent any
  environment{
        // Define environment variables here
ADMIN_USER1 = credentials("ADMIN_USER1")
ADMIN_USER1_PASSWORD = credentials("ADMIN_USER1_PASSWORD") // Retrieve credentials using Jenkins Credentials Plugin
APP_URL = credentials("APP_URL")
BROWSER_TYPE = credentials("browser") 
        // You can also set other environment variables here
    }
stages{
stage('Build'){
steps{
bat 'npm install'
echo "building the application"
echo ">>>>>Admin user name is:$ADMIN_USER1"
echo ">>>>>>URL  is :$PP_URL "
echo ">>>>>browser type is:$BROWSER_TYPE "
echo "build success"
}
}

stage('Smoke Test'){
steps{
bat ' npm run smoke'
echo " running Smoke test"
echo "Smoke Test success"
}
}
stage('Sanity Test'){
steps{
bat ' npm run addcourses'
bat 'npm run checkGrades'
echo " running Smoke test"
echo "Smoke Test success"
}
}
stage('Functional Test'){
steps{
 bat 'npm run regression'
echo "Functional Test success"
}
}
stage('Generate Cucumber HTML report'){
        steps{
        cucumber buildStatus:"UNSTABLE",
        fileIncludePattern: "**/cucumber-report.json",
        jsonReportDirectory: "test-results/"  
}
}
}
}

