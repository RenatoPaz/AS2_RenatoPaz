pipeline {
    agent any

    tools {
        nodejs 'Node22'
    }

    triggers {
        pollSCM('* * * * *')
    }

    environment {
        NETLIFY_SITE_ID = 'f5efb78d-52ff-44f3-8667-7300c7a5ab33'
        NETLIFY_AUTH_TOKEN = credentials('netlify-auth-token')
    }

    stages {
        stage('Build') {
            steps {
                sh '''
                    node -v
                    npm -v
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

        stage('Deploy') {
            steps {
                sh '''
                    npx netlify deploy --dir=dist --prod
                '''
            }
        }
    }
}