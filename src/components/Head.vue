<template>
<header class="header_area">
		<div class="main_menu">
			<nav class="navbar navbar-expand-lg navbar-light">
				<div class="container">
					<!-- Brand and toggle get grouped for better mobile display -->
					<a class="navbar-brand logo_h" href="index.html"><img src="../img/logo.png" alt=""></a>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
					 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<!-- Collect the nav links, forms, and other content for toggling -->
					<div class="collapse navbar-collapse offset" id="navbarSupportedContent">
						<ul class="nav navbar-nav menu_nav justify-content-end">
							<li class="nav-item active">
								<router-link to="/HelloWorld">Home</router-link></li>
							<li class="nav-item">
								<router-link to="./About"> About									
								</router-link></li>
							<li class="nav-item"> 
								<router-link to="contact"> Contact									
								</router-link></li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	</header>
	
</template>

<script setup>

</script>

<style>

</style>