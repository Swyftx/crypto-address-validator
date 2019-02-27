pipeline {
  agent any

  tools {nodejs "8"}

  stages {
    stage('Initialise') {
      steps {
        script {
          env.SWYFTX_GIT_HTTPS_URL = env.GIT_URL
          env.SWYFTX_REPO_HTTPS_URL = sh (script: 'echo "${GIT_URL}" | sed s/\\\\.git$//', returnStdout: true).trim()
          env.SWYFTX_ORG_REPO = sh (script: 'echo "${SWYFTX_REPO_HTTPS_URL}" | sed s/^https:\\\\/\\\\/github.com\\\\///', returnStdout: true).trim()
          env.isPR = sh (script: 'if [ `echo ${GIT_BRANCH} | cut -d "-" -f 1` = "PR"  ]; then echo true; else echo false; fi', returnStdout: true).trim()
          env.isBranch = sh (script: 'if [ "$isPR" = false ]; then echo true; else echo false; fi', returnStdout: true).trim()
          env.SWYFTX_REPO_BRANCH_NAME = env.GIT_BRANCH
          env.SWYFTX_REPO_BRANCH_FULL_REF = sh (script: 'echo "refs/heads/${SWYFTX_REPO_BRANCH_NAME}"', returnStdout:true).trim()

        }
      }
    }
    stage('Clone') {
      steps {
        script {
          checkout([$class: 'GitSCM', branches: [[name: env.SWYFTX_REPO_BRANCH_FULL_REF]], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: '0dd8222e-df75-4648-a964-e65bcbd20409', url: env.SWYFTX_GIT_HTTPS_URL]]])
        }
      }
    }
    stage('Version') {
      steps {
        sh 'yarn --version; node -v'
      }
    }
    stage('Install') {
      steps {
        script {
          withCredentials([string(credentialsId: 'de6e038a-6c25-4bfa-ab1c-c402257f1eef', variable: 'NPM_TOKEN')]) {
            configFileProvider([configFile(fileId: 'b36668ce-e243-4084-b2bb-e6fc0a37fff5', targetLocation: '.npmrc', replaceTokens: true)]) {
              file = readFile('.npmrc')
              writeFile(file: '.npmrc', text: "$file$NPM_TOKEN")
              sh 'yarn install'
            }
          }
        }
      }
    }
    stage('Test') {
      steps {
        sh 'yarn test'
      }
    }
    stage('Deploy') {
      steps {
        script {
          if (env.isBranch == "true") {
            if (env.SWYFTX_REPO_BRANCH_NAME == 'dev') {
              withCredentials([string(credentialsId: 'de6e038a-6c25-4bfa-ab1c-c402257f1eef', variable: 'NPM_TOKEN')]) {
                configFileProvider([configFile(fileId: 'b36668ce-e243-4084-b2bb-e6fc0a37fff5', targetLocation: '.npmrc', replaceTokens: true)]) {
                  file = readFile('.npmrc')
                  writeFile(file: '.npmrc', text: "$file$NPM_TOKEN")
                  sh 'npm publish . --tag beta'
                }
              }
            } else if (env.SWYFTX_REPO_BRANCH_NAME == 'master') {
              withCredentials([string(credentialsId: 'de6e038a-6c25-4bfa-ab1c-c402257f1eef', variable: 'NPM_TOKEN')]) {
                configFileProvider([configFile(fileId: 'b36668ce-e243-4084-b2bb-e6fc0a37fff5', targetLocation: '.npmrc', replaceTokens: true)]) {
                  file = readFile('.npmrc')
                  writeFile(file: '.npmrc', text: "$file$NPM_TOKEN")
                  sh 'node ci/tagAsLatest.ci.js'
                }
              }
            } else {
              sh 'echo "Not deploying because of branch ${SWYFTX_REPO_BRANCH_NAME}"'
            }
          } else {
            sh 'echo "Not deploying because not branch"'
          }
        }
      }
    }
  }

  post {
    always {
      echo 'This will always run'
      sh 'printenv'
    }
    success {
      echo 'This will run only if successful'
    }
    failure {
      echo 'This will run only if failed'
    }
    unstable {
      echo 'This will run only if the run was marked as unstable'
    }
    changed {
      echo 'This will run only if the state of the Pipeline has changed'
      echo 'For example, if the Pipeline was previously failing but is now successful'
    }
  }
}
