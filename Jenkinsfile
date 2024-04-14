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
stage('Login Test'){
steps{
bat ' npm run Setup'
echo " running Setup test"
echo "Setup Test success"
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
stage('Generate HTML report'){
        steps{
        bat "npm run generate:report && npm run open_report"
        
}
}
}
}

}