<body>
	<div class="hero">
		<div class="container">
			<div class="hero__text">
				<h1>Responsive layouts don't have to be a struggle</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam.
				</p>
			</div>
			<div class="hero__btn">
				<a href="#" class="btn">I WANT TO LEARN</a>
			</div>
		</div>
	</div>
</body>

<style lang="sass">
body 
	margin: 0 
	font-family: Roboto, sans-serif 
	font-weight: normal
	font-size: 2vh 

h1 
	font-size: 6vh 
	font-weight: 900
	margin: 0

.container 
	width: 85% 
	margin: 0 auto 

.hero 
	padding: 8vmin 0 
	background-color: #23424A 
	color: #fff 
	p 
		margin: 3vh 0 
	&__text 
		width: 50%
	&__btn 
		width: 50% 

.btn 
	display: inline-block 
	text-decoration: none 
	text-transform: uppercase 
	color: #23424A 
	font-family: Roboto 
	font-weight: bold
	background-color: #38CFD9 
	padding: .75em 2em 
	border-radius: 5rem 
	width: fit-content 

@media only screen and (max-width &: 600px)
	.hero__text 
		width: 100% 
	.hero__btn
		width: 100%
	

</style>
