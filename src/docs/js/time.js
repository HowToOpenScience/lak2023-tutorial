const TIME_FORMAT_REGEX = /(.+) \$(\d{4}-\d{2}-\d{2}) ((?:\d{2}:\d{2}:\d{2}-\d{2}:\d{2}:\d{2},?)+) (\w+)\$/g;

var time_replace = document.getElementsByClassName("time_format");

for (var i = 0; i < time_replace.length; i++) {
    var matches = [...time_replace[i].innerText.matchAll(TIME_FORMAT_REGEX)][0];
    var formatted = `${matches[1]} `, date = matches[2], time_periods = matches[3].split(','), time_zone = matches[4];

    var first_date = undefined;

    for (var time_period = 0; time_period < time_periods.length; time_period++) {
        var times = time_periods[time_period].split('-');
        var start_time = new Date(`${date} ${times[0]} ${time_zone}`);
        var end_time = new Date(`${date} ${times[1]} ${time_zone}`);

        if (first_date === undefined) {
            first_date = start_time;
            formatted += first_date.getFullYear() + "/" +
            ("0" + (first_date.getMonth()+1)).slice(-2) + "/" +
            ("0" + first_date.getDate()).slice(-2) + " ";
        }
        
        formatted += `${("0" + start_time.getHours()).slice(-2) + ":" +
            ("0" + start_time.getMinutes()).slice(-2)
        } - ${("0" + end_time.getHours()).slice(-2) + ":" +
            ("0" + end_time.getMinutes()).slice(-2)
        }`;
        if (time_period < time_periods.length - 1) formatted += ", ";
    }
    formatted += ` UTC${first_date.toString().split('GMT')[1]}`;
    time_replace[i].innerText = formatted;
}