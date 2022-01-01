export default function Hamburger({ isOpen }){

	return(
		<>
			<div className="hamburger">
				<div className="burger burger1" />
				<div className="burger burger2" />
				<div className="burger burger3" />
			</div>


			<style jsx>{`
			    .hamburger{
				width: 2rem;
				height: 2rem;
				justify-content: space-around;
				display: flex;
				flex-flow: column nowrap;
				float: right;
				cursor: pointer;
				margin: 0;
			    }

			    .burger{
				width: 2rem;
				height: 0.25rem;
				border-radius: 10px;
				background-color: black;
				transform-origin: 1px;
				transition: all 0.3s linear;


			    }

			    .burger1{
				transform: ${ isOpen ? 'rotate(45deg)' : 'rotate(0)'};
			    }

			    .burger2{
				transform: ${ isOpen ? 'translateX(100%)' : 'translateX(0)'};
				opacity: ${ isOpen ? 0 : 1};
			    }

			    .burger3{
				transform: ${ isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
			    }


			`}</style>
		</>
	    )

}
