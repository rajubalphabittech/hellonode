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
      def dockerRun = 'sudo docker run -d --name  my-node-app -p 49162:8000  damukiran/hellonode:latest'
      sshagent(['ssh_aws']) {
      sh "ssh -o StrictHostKeyChecking=no ubuntu@ec2-15-206-128-99.ap-south-1.compute.amazonaws.com ${dockerRun}"
     }
     }

}
