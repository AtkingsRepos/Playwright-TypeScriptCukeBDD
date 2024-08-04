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
// stage('Login Test'){
// steps{
// bat ' npm run Setup'
// echo " running Login test"
// echo "Login Test success"
// }
// }
stage('Smoke Test'){
steps{
bat ' npm run smoke'
echo " running Smoke test"
echo "Smoke Test success"
}
}
stage('Regression Test'){
steps{
bat ' npm run regression'
bat 'npm run checkGrades'
echo " running Smoke test"
echo "Smoke Test success"
}
}
stage('Functional: End2End Test'){
steps{
 bat 'npm run test'
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

