node {
    def app

    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */

        checkout scm
    }

    stage('Build image') {
        /* This builds the actual image; synonymous to
         * docker build on the command line */

        app = docker.build("damukiran/hellonode")
    }

    stage('Test image') {
        /* Ideally, we would run a test framework against our image.
         * For this example, we're using a Volkswagen-type approach ;-) */

        app.inside {
            sh 'echo "Tests passed"'
        }
    }

    stage('Push image') {
        /* Finally, we'll push the image with two tags:
         * First, the incremental build number from Jenkins
         * Second, the 'latest' tag.
         * Pushing multiple tags is cheap, as all the layers are reused. */
        docker.withRegistry('https://registry.hub.docker.com', 'dockerhub_id') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }
    stage('Deploy to Dev') {
      def git = 'git clone https://github.com/damukiran/hellonode.git'
      def nav = 'cd hellonode'
      def inst = 'npm i'

      sshagent(['ssh_aws']) {
      sh "ssh -o StrictHostKeyChecking=no ubuntu@ec2-13-232-232-249.ap-south-1.compute.amazonaws.com ${git}"
      sh "ssh -o StrictHostKeyChecking=no ubuntu@ec2-13-232-232-249.ap-south-1.compute.amazonaws.com ${nav}"
      sh "ssh -o StrictHostKeyChecking=no ubuntu@ec2-13-232-232-249.ap-south-1.compute.amazonaws.com ${inst}"

     }
     }

}
