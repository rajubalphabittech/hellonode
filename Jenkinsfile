node {
    def app

    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */

        checkout scm
    }

    stage('Deploy to Dev') {
      def git = 'git branch'
      def inst = 'npm i'
      def nav = 'cd hellonode'
      def comm ='cd hellonode\n git fetch origin\n git checkout master\n git pull origin master\n git merge origin/master'
        def command1 = ["git", "checkout", "master"]
       def command2 = ["git", "pull", "origin", "master"]


      sshagent(['ssh_aws']) {
      sh "ssh -o StrictHostKeyChecking=no ubuntu@ec2-13-232-232-249.ap-south-1.compute.amazonaws.com ${git}"

      }
     }

}
