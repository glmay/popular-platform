import Logger from 'js-logger'
import Vue from 'vue'

Logger.useDefaults({
	defaultLevel: process.env.NODE_ENV == 'production' ? Logger.ERROR : Logger.DEBUG,
	formatter: function (messages, context) {
		// prefix each log message with a timestamp.
		messages.unshift(new Date().toLocaleTimeString())
	}
});

Vue.prototype.$logger = Logger;

export default Logger;
