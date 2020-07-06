pipeline { 
  agent any 

  stages {
    stage ('Checkout Code') {
      steps {
        checkout scm
      }
    }
    stage ('Install dependencies') {
      steps {
        sh "apk add nodejs"
        sh "echo $PATH"
        sh "npm install"
      }
    }
  }
}
