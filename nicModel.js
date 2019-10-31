const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let visitorSchema = mongoose.Schema({
	idCard : {type : Number, required : true},
	nombreCompleto : {type : String, required : true},
	personaVisitar : String,
	motivo : String,
	empresa : String
});

visitorSchema.index({'$**' : 'text'});

let Visitors = mongoose.model('Visitor',visitorSchema);

const visitorList = {
	get : function(){
		return Visitors.find()
			.then(user => {
				return user;
			})
			.catch(err => {
				throw new Error(err);
			});
	},
	add : function(newVisit){
		return Visitors.create(newVisit)
			.then(user => {
				return user;
			})
			.catch(err => {
				throw new Error(err);
			});
	},
	delete : function(delItem){
		return Visitors.findOneAndDelete({_id:delItem})
			.then(user => {
				return user;
			})
			.catch(err => {
				throw new Error(err);
			});
	},
	getGeneral: function(value){
		return Visitors.find({$text : {$search : value}})
			.then(user => {
				return user;
			})
			.catch(err =>{
				throw new Error(err);
			});
	}
};



module.exports = {visitorList};