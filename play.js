
var handler;
var template_wild = _.template("<div class='wild_group' id='<%= id%>' name='<%= name%>' val='0' style='left:<%= left%>px; top:<%= top%>px;'>"
						+"<div class='wild'><span></span></div><div class='wild'><span></span></div><div class='wild'><span></span></div></div>");
var data_wild = [
	{id:'wild_group111',name:'group11',left:'128',top:'362'},
	{id:'wild_group112',name:'group11',left:'128',top:'385'},
	{id:'wild_group121',name:'group12',left:'148',top:'446'},
	{id:'wild_group122',name:'group12',left:'148',top:'469'},
	{id:'wild_group131',name:'group13',left:'232',top:'472'},
	{id:'wild_group132',name:'group13',left:'232',top:'495'},
	{id:'wild_group141',name:'group14',left:'58',top:'503'},
	{id:'wild_group142',name:'group14',left:'58',top:'526'},
	{id:'wild_group151',name:'group15',left:'167',top:'537'},
	{id:'wild_group152',name:'group15',left:'167',top:'560'},
	{id:'wild_group161',name:'group16',left:'236',top:'597'},
	{id:'wild_group162',name:'group16',left:'236',top:'620'},

	{id:'wild_group211',name:'group21',left:'548',top:'518'},
	{id:'wild_group212',name:'group21',left:'548',top:'541'},
	{id:'wild_group221',name:'group22',left:'688',top:'518'},
	{id:'wild_group222',name:'group22',left:'688',top:'541'},
	{id:'wild_group231',name:'group23',left:'819',top:'507'},
	{id:'wild_group232',name:'group23',left:'819',top:'530'},
	{id:'wild_group241',name:'group24',left:'658',top:'595'},
	{id:'wild_group242',name:'group24',left:'658',top:'618'},
	{id:'wild_group251',name:'group25',left:'778',top:'575'},
	{id:'wild_group252',name:'group25',left:'778',top:'598'},
	{id:'wild_group261',name:'group26',left:'812',top:'639'},
	{id:'wild_group262',name:'group26',left:'812',top:'662'},

	{id:'wild_group311',name:'group31',left:'149',top:'724'},
	{id:'wild_group312',name:'group31',left:'149',top:'747'},
	{id:'wild_group321',name:'group32',left:'58',top:'777'},
	{id:'wild_group322',name:'group32',left:'58',top:'800'},
	{id:'wild_group331',name:'group33',left:'188',top:'794'},
	{id:'wild_group332',name:'group33',left:'188',top:'817'},
	{id:'wild_group341',name:'group34',left:'294',top:'761'},
	{id:'wild_group342',name:'group34',left:'294',top:'784'},
	{id:'wild_group351',name:'group35',left:'105',top:'848'},
	{id:'wild_group352',name:'group35',left:'105',top:'871'},
	{id:'wild_group361',name:'group36',left:'245',top:'877'},
	{id:'wild_group362',name:'group36',left:'245',top:'900'},

	{id:'wild_group411',name:'group41',left:'508',top:'700'},
	{id:'wild_group412',name:'group41',left:'508',top:'723'},
	{id:'wild_group421',name:'group42',left:'444',top:'783'},
	{id:'wild_group422',name:'group42',left:'444',top:'806'},
	{id:'wild_group431',name:'group43',left:'580',top:'765'},
	{id:'wild_group432',name:'group43',left:'580',top:'788'},
	{id:'wild_group441',name:'group44',left:'544',top:'824'},
	{id:'wild_group442',name:'group44',left:'544',top:'847'},
	{id:'wild_group451',name:'group45',left:'443',top:'883'},
	{id:'wild_group452',name:'group45',left:'443',top:'906'},
	{id:'wild_group461',name:'group46',left:'554',top:'907'},
	{id:'wild_group462',name:'group46',left:'554',top:'930'},

	{id:'wild_group511',name:'group51',left:'154',top:'1007'},
	{id:'wild_group512',name:'group51',left:'154',top:'1030'},
	{id:'wild_group521',name:'group52',left:'59',top:'1047'},
	{id:'wild_group522',name:'group52',left:'59',top:'1070'},
	{id:'wild_group531',name:'group53',left:'142',top:'1091'},
	{id:'wild_group532',name:'group53',left:'142',top:'1114'},
	{id:'wild_group541',name:'group54',left:'221',top:'1137'},
	{id:'wild_group542',name:'group54',left:'221',top:'1160'},
	{id:'wild_group551',name:'group55',left:'293',top:'1079'},
	{id:'wild_group552',name:'group55',left:'293',top:'1102'},
	{id:'wild_group561',name:'group56',left:'387',top:'1074'},
	{id:'wild_group562',name:'group56',left:'387',top:'1097'},

	{id:'wild_group611',name:'group61',left:'695',top:'955'},
	{id:'wild_group612',name:'group61',left:'695',top:'978'},
	{id:'wild_group621',name:'group62',left:'668',top:'1038'},
	{id:'wild_group622',name:'group62',left:'668',top:'1061'},
	{id:'wild_group631',name:'group63',left:'816',top:'1017'},
	{id:'wild_group632',name:'group63',left:'816',top:'1040'},
	{id:'wild_group641',name:'group64',left:'604',top:'1124'},
	{id:'wild_group642',name:'group64',left:'604',top:'1147'},
	{id:'wild_group651',name:'group65',left:'736',top:'1108'},
	{id:'wild_group652',name:'group65',left:'736',top:'1131'},
	{id:'wild_group661',name:'group66',left:'845',top:'1096'},
	{id:'wild_group662',name:'group66',left:'845',top:'1119'}
];

var diceContent = "<div style='display:none' id='dice' class='div_dice'>"
	+"<div class='dice_row'><span class='dice'>1</span><span class='dice'>2</span><span class='dice'>3</span></div>"
	+"<div class='dice_row'><span class='dice'>4</span><span class='dice'>5</span><span class='dice'>6</span></div>"
	+"<div class='dice_row'><span class='dice'></span><span class='dice'>-</span><span class='dice'>=</span></div>"
	+"</div>";

var template_dayTracker = _.template("<div class='day_tracker_group' id='<%= id%>' name='<%= name%>' val='' "
					+ " style='left:<%= left%>px;top:<%= top%>px;'>");
var template_day = _.template("<div class='day_tracker' val='<%= val%>' style='<%= style%>' type='0'><span></span></div>");
var data_dayTracker = [
	{id:'dayTracker1',name:'dayTracker1',val:[-1,-1,1,-1,1,1],left:'255',top:'410',style:'display: inline-block;'},
	{id:'dayTracker2',name:'dayTracker2',val:[-1, 1,1,-1,1,1],left:'643',top:'427',style:'display: inline-block;'},
	{id:'dayTracker3',name:'dayTracker3',val:[-1,1,-1,1,-1,1],left:'112',top:'660',style:'display: inline-block;'},
	{id:'dayTracker4',name:'dayTracker4',val:[-1,1,-1,1,-1,1],left:'580',top:'696',style:'display: inline-block;'},
	{id:'dayTracker5',name:'dayTracker5',val:[-1, 1,1,-1,1,1],left:'231',top:'974',style:'display: block;'},
	{id:'dayTracker6',name:'dayTracker6',val:[-1,-1,1,-1,1,1],left:'905',top:'934',style:'display: block;'}
];

var template_timeTrack = _.template("<div class='time_tracker' id='<%= id%>' name='<%= name%>'"
	+" val='<%= val%>' style='left:<%= left%>px;top:<%= top%>px;' type='<%= type%>' doom='<%= doom%>'><span></span></div>");
var data_timeTrack = {
	type : [0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0],
	left : [713,751,713,678,643,608,572,542,
			572,611,650,689,728,767,
			806,806,806,806,806,806,806,806],
	top  : [139,122,105,105,105,105,105,86,
			68,68,68,68,68,68,68,
			93,118,143,167,192,218,243],
	doom : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]
};

$(document).ready(function(){
	// 添加内容
	var wild_content = '';
	for (var data in data_wild) {
		wild_content += template_wild(data_wild[data]);
	}
	$('#main').append(wild_content);

	var dayTrackerContent = '';
	for (var data in data_dayTracker) {
		dayTrackerContent += template_dayTracker(data_dayTracker[data]);
		for (var val in data_dayTracker[data].val) {
			dayTrackerContent += template_day({id:data_dayTracker[data].id,val:val,style:data_dayTracker[data].style});
		}
		dayTrackerContent += "</div>";
	}

	$('#main').append(dayTrackerContent);

	var timeTrackContent = '';
	for (var i = 0; i < 22; i++) {
		timeTrackContent += template_timeTrack({
			id:'time_track_'+i,
			name:'time_track_'+i,
			val:0,
			left: data_timeTrack.left[i],
			top : data_timeTrack.top[i],
			type : data_timeTrack.type[i],
			doom : data_timeTrack.doom[i]
		})
	}
	$('#main').append(timeTrackContent);

	$('#main').append(diceContent);

	// 背景事件
	$('#bg_1').unbind('click').click(function(){
		$('#dice').hide();
	});
	// 格子输入
	$('.wild').unbind('click').bind('click',function(e){
		$('#dice').hide();
		$('#dice').css('top',e.pageY);
		$('#dice').css('left',e.pageX);
		$('#dice').show();
		handler = this;
	});

	$('.dice').unbind('click').click(dice_click);

	$('.day_tracker').unbind('click').click(function(){
		if ($(this).attr('type')=='0') {
			$(this).attr('type','1');
			$(this).css('opacity','1');
		} else {
			$(this).attr('type','0');
			$(this).css('opacity','0');
		}
	});

	$('.time_tracker').unbind('click').click(function(){
		if ($(this).attr('val')=='0') {
			$(this).attr('val','1');
			$(this).css('opacity','1');
		} else {
			$(this).attr('val','0');
			$(this).css('opacity','0');
		}
	});

	// 恢复数据
	// 1.search_box 
	// 2.day_tracker
	// 3.construct_box
	// 4.activation_activated_box
	// 5.activation_boxes
	// 6.result_circles
	// 7.energy_bar
	// 8.waste_basket
	// 9.connection_boxes
	// 10.result_circles
	// 11.link_box
	// 12.time_tracker
	// 13.doomsday
	// 14.god's_hand
	// 15.event_cycles
	// 16.tool_belt
	// 17.component_stores
	// 18.legendary_treasures
	// 19.hit_points
});

var dice_click = function(){
	var val = $(this).text();
	var name = $(handler).parent().attr('name');

	$('#dice').hide();
	if (val == '-' ) {
		$(handler).parent().find('span').text('');
	} else if ( val == '=') {
		$('[name="'+name+'"]').find('span').text('');
		$('[name="'+name+'"]').attr('val','0');
	} else {
		$(handler).find('span').text(val);
	}

	var num = '';
	$.each($(handler).parent().find('span'),function(){
		num += $(this).text()||'0';
	});

	$(handler).parent().attr('val',num);


	var num_0 = parseInt($($('[name="'+name+'"]')[0]).attr('val'));
	var num_1 = parseInt($($('[name="'+name+'"]')[1]).attr('val'));
	var num_final = num_0 - num_1;

	// 生成有效数字，判断是否获得零件
	var selector = '[name="'+name+'"] .wild';
	if (num_final >= 0 && num_final <= 10) $(selector).css('background-color','#660099');
	if (num_final >= 11 && num_final <= 99) $(selector).css('background-color','#0033CC');
	if ((num_final >= 100 && num_final <= 199) || (num_final <= -1 && num_final >= -100)) $(selector).css('background-color','#24b800');
	if ((num_final >= 200 && num_final <= 299) || (num_final <= -101 && num_final >= -200)) $(selector).css('background-color','#99ff00');
	if ((num_final >= 300 && num_final <= 399) || (num_final <= -201 && num_final >= -300)) $(selector).css('background-color','#ffff00');
	if ((num_final >= 400 && num_final <= 499) || (num_final <= -301 && num_final >= -400)) $(selector).css('background-color','#ff9900');
	if ((num_final >= 500 && num_final <= 555) || (num_final <= -401 && num_final >= -555)) $(selector).css('background-color','#ff0000');

	// 无输入不改变样式
	if (num_final == 0 && num_0 == 0) $(selector).css('background-color','#ddd');
}

