import $ from 'jquery';
import event from './event';

$('body').append('<div class="title">Hello World</div>');
$('.title').click(event);