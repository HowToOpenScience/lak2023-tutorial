// Regex syntax for timestamp: Prefix#Display Time# $Time Zone Format$Suffix
const TIME_FORMAT_REGEX = /(.*)#(.+)# \$(\d{4}-\d{2}-\d{2}) ((?:\d{2}:\d{2}:\d{2}-\d{2}:\d{2}:\d{2},?)+) (\w+)\$(.*)/g;

// Get all classes for formatting time
var time_replace = document.getElementsByClassName("time_format");

for (var i = 0; i < time_replace.length; i++) {
    // Get matches for time format
    var matches = [...time_replace[i].innerHTML.matchAll(TIME_FORMAT_REGEX)][0];
    var prefix = matches[1],
        display = matches[2]
        date = matches[3],
        time_periods = matches[4].split(','),
        time_zone = matches[5],
        suffix = matches[6];
    var formatted = "";

    var first_date = undefined;

    // For each time period (HH:mm:ss-HH:mm:ss)
    for (var time_period = 0; time_period < time_periods.length; time_period++) {
        // Time (HH:mm:ss)
        var times = time_periods[time_period].split('-');
        var start_time = new Date(`${date} ${times[0]} ${time_zone}`);
        var end_time = new Date(`${date} ${times[1]} ${time_zone}`);

        // Get first date information
        if (first_date === undefined) {
            first_date = start_time;

            // Set year
            formatted += first_date.getFullYear() + "/" +
            ("0" + (first_date.getMonth()+1)).slice(-2) + "/" +
            ("0" + first_date.getDate()).slice(-2) + " ";
        }
        
        // Set formatted time
        formatted += `${("0" + start_time.getHours()).slice(-2) + ":" +
            ("0" + start_time.getMinutes()).slice(-2)
        } - ${("0" + end_time.getHours()).slice(-2) + ":" +
            ("0" + end_time.getMinutes()).slice(-2)
        }`;
        // If multiple regions are specified, add a comma
        if (time_period < time_periods.length - 1) formatted += ", ";
    }
    // Add UTC information for timezone
    formatted += ` UTC${first_date.toString().split('GMT')[1]}`;

    // Set to abbreviation
    time_replace[i].innerHTML = `${prefix}<abbr title="${formatted}">${display}</abbr>${suffix}`;
}
