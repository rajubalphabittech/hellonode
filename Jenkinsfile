node {
    def app
    tools {nodejs "node"}

    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */

        checkout scm
    }

    stage('Deploy to Dev') {
      def git = 'git branch'
      def inst = 'npm i'
      def nav = 'cd hellonode\n sudo chown-R $USER: .\n git pull https://github.com/damukiran/hellonode.git master'
      def comm ='cd hellonode\n git fetch origin\n git checkout master\n git pull\n git branch --set-upstream-to=origin/master master\n git pull'
      def deploy='cd hellonode\n  ./publish.sh'

      sshagent(['ssh_aws']) {
      sh "ssh -o StrictHostKeyChecking=no ubuntu@ec2-13-232-232-249.ap-south-1.compute.amazonaws.com ${deploy}"

      }
     }

}
