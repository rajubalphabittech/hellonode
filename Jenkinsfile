node {
    def app
    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */

        checkout scm
    }

    stage('Deploy to Dev') {
      def git = 'git branch'
      def inst = 'npm i'
      def nav = 'cd hellonode\n git checkout master\n git pull'
      def comm ='cd hellonode\n git fetch origin\n git checkout master\n git pull\n git branch --set-upstream-to=origin/master master\n git pull'
      def deploy='cd hellonode\n chmod +x ./publish.sh\n ./publish.sh'

      sshagent(['ssh_aws']) {
      sh "ssh -o StrictHostKeyChecking=no ubuntu@ec2-52-66-6-102.ap-south-1.compute.amazonaws.com ${nav}"

      }
     }

}
