import $ from 'jquery';
export default function () {
    return $.ajax({
        type: 'POST',
        url: '/api/getLikesData'
    });
}