const dotenv = require('dotenv')

dotenv.config()

module.exports = {clusterName: process.env.CLUSTER_NAME}
