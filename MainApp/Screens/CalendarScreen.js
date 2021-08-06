import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';




export default class CalendarScreen extends React.Component{
	render(){
		const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
		const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
		const workout = {key: 'workout', color: 'green'};
		let now = new Date();
		const nowYear = now.getFullYear();
		const nowMonth = now.getMonth() + 1 < 10 ? '0'+(now.getMonth() + 1) : now.getMonth() + 1;
		const nowDate = now.getDate() < 10 ? '0'+now.getDate() : now.getDate();
		now = `${nowYear}-${nowMonth}-${nowDate}`;
		
		return (
			<View style={styles.container}>
				<View style={styles.calendar}>
					<Calendar
						current={now}
						minDate={'2021-06-14'}
						maxDate={now}
						onDayPress={(day) => {console.log('selected day', day)}}
						monthFormat={'yyyy년 MM월'}
						hideExtraDays = {true}
						markingType={'multi-dot'}
						markedDates={{
							// '2021-07-15' : {selected: true, marked: true, selectedColor: 'blue'},
							// '2021-07-07': {marked: true},
							// '2021-07-08': {marked: true, dotColor: 'red', activeOpacity: 0},
							// '2021-07-09': {dots: [vacation, massage, workout]},
    						// '2021-07-12': {dots: [massage, workout]},
						  }}
						theme={{
						textMonthFontWeight:'700',
						monthTextColor: '#78854f',
						todayTextColor:'#78854f',
						arrowColor: '#78854f',
						selectedDayBackgroundColor: '#aaaaaa',
						selectedDayTextColor: '#ffffff',
						textSectionTitleColor: '#b6c1cd',
						textSectionTitleDisabledColor: '#d9e1e8',
						selectedDotColor: '#aaaaaa',
						indicatorColor: 'blue',
						'stylesheet.calendar.header': {
						  week: {
							marginTop: 30,
							flexDirection: 'row',
							justifyContent: 'space-around'
						  },
						  dayTextAtIndex0: {
							color: '#68753f'
						  },
						  dayTextAtIndex6: {
							color: '#98a56f'
						  }
						}
					  }}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  alignItems:'center',
	  backgroundColor:'#ffffff',
	},
	calendar : {
		marginTop:"10%",
		width:"90%",
	}
})