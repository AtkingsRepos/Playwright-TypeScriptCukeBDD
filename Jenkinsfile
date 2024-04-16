pipeline
{
agent any
stages{
stage('Build'){
steps{
bat 'npm install'
echo "building the application"
echo "build success"
}
}
environment {
        // Define environment variables here
        ADMIN_USER1 = credentials('ADMIN_USER1') 
        ADMIN_USER1_PASSWORD = credentials('ADMIN_USER1_PASSWORD') // Retrieve credentials using Jenkins Credentials Plugin
        APP_URL = credentials('APP_URL')
        browserType = credentials('browser')
        // You can also set other environment variables here

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

