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
    nodejs(nodeJSInstallationName: 'node10') {
      sh 'npm -v'  //substitute with your code
      sh 'node -v'
    }
  }       }
  }
}
