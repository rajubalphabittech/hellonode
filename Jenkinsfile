pipeline { 
  agent any 
  tools {nodejs "node"}

  stages {
    stage ('Checkout Code') {
      steps {
        checkout scm
      }
    }
    stage ('Install dependencies') {
      steps {
        sh "npm install"
      }
    }
  }
}
