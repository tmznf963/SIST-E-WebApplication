<?php
	header('Content-Type: text/event-stream');
	header('Cache-Control: no-cache');
	header('Refresh:1');//1초마다 새로고침

	$time = date('r');
	echo "data: The server time is: {$time}\n\n";
	flush();
?>