//-----------------------------------------------------------------------------------------------

(function()
{
	"use strict";

	//-----------------------------------------------------------------------------------------------
	//	const-ish.
	//-----------------------------------------------------------------------------------------------

	//-----------------------------------------------------------------------------------------------
	//	Static variables.
	//-----------------------------------------------------------------------------------------------

	var camelot				=	window.com.camelot,
		core				=	window.com.camelot.core,
		iwg					=	camelot.iwg,
		ILGame				=	beablib.Game,
		TheTicket			=	null;

	//-----------------------------------------------------------------------------------------------

	var CTicket				=	{};

	//-----------------------------------------------------------------------------------------------

	CTicket.CreateTicket	=	function()
	{
		//	Has the ticket already been defined?
		if( TheTicket!==null )
		{
			//	Yep, so we shouldn't be doing it again.
			alert( "Beablib: Ticket has already been defined" );
			return;
		}

		//	Create a reference to the camelot ticket...
		TheTicket	=	core.IWG.ame( 'ticket' );

		//	...& just return a reference to this class.
		return	CTicket;
	};

	//-----------------------------------------------------------------------------------------------

	CTicket.CheckTicket		=	function()
	{
		return	true;
	};

	//-----------------------------------------------------------------------------------------------

	CTicket.IsWager			=	function()		{ 	return core.IWG.ame( 'get', {vars: ['iwgIsWager']} );	};
	CTicket.IsWin			=	function()		{	return core.IWG.ame( 'get',{vars:['iwgIswT']});			};
	CTicket.CloseGame		=	function()		{	core.IWG.ame('closeGame');								};
	CTicket.WinAmount		=	function()		{	return parseInt( core.IWG.ame( 'bank', {balance: 'finalAmount', raw: true, log: true} ) );	};
	CTicket.BankWin			=	function(s)		{	core.IWG.ame( 'bank', {deposit: [PrizeListArray[s]], log: true } );	};

	//-----------------------------------------------------------------------------------------------
	//	Namespace path.
	//-----------------------------------------------------------------------------------------------

	ILGame.CTicket			=	CTicket;

	//-----------------------------------------------------------------------------------------------
}());

//-----------------------------------------------------------------------------------------------
