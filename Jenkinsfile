pipeline { 
  agent any 
  tools {nodejs "node10"}

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
