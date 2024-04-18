import moment from 'moment'


export const dateFormat = (date) =>{
    return moment(date).format('MM-dd-yyyy')
}