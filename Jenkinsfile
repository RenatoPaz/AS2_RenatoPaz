pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh '''
                    npm install
                    npm run build
                '''
            }
        }

        stage('Test') {
            steps {
                sh '''
                    npm test -- --run
                '''
            }
        }
    }
}