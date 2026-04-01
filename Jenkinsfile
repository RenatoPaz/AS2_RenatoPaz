// pipeline {
//     agent {
//         docker {
//             image 'node:22-alpine'
//             reuseNode true
//         }
//     }

//     stages {
//         stage('Build') {
//             steps {
//                 sh '''
//                     node -v
//                     npm -v
//                     npm install
//                     npm run build
//                 '''
//             }
//         }

//         stage('Test') {
//             steps {
//                 sh '''
//                     npm test -- --run
//                 '''
//             }
//         }
//     }
// }

pipeline {
    agent any

    tools {
        nodejs 'Node22'
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
    }
}