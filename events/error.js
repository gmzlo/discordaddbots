exports.run = async(client, error) => {
 console.error
 client.channels.find("id", process.env.LOG_CHANNALE).send(`**log**: **error** - ${error}
 -------------------------------------------------------------------`)
}