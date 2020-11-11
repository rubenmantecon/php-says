<?php session_start();?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<style><?php include_once(dirname(__DIR__).'/styles/style.css');?></style> 
	<title>Ranking</title>
	<link rel = "icon" href =  "../static/icon.png" type = "image/x-icon">
</head>
<body>
	<audio autoplay src="cambio.mp3"></audio>
	<?php include(dirname(__DIR__).'/common/header.php'); ?>
	<div class="main">
		<div class="">
			<h1>RANKING MEMORY GAME</h1>
		</div>
		<hr>
		<div class="flex">		
			<div class="containter4"></div>
			<div class="centro ranking">
				<table class="ranking">
				<tr>
					<th class="rankingth">USER</th>
					<th class="rankingth">POINTS</th>
				</tr>
					<?php
						require(dirname(__DIR__).'/function/f.php');
						generateRanking();
					?>
				</table>
			</div>
			<div class="containter4"></div>
		</div>
	</div>
</body>
</html>