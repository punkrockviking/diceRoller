const dotenv = require('dotenv')

dotenv.config()

modules.exports = {clusterName: process.env.CLUSTER_NAME}