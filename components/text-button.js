function TextBtn(props) {
	return (
		<div id="linkBtn" className="flex w-full">
			<a href={props.url} className="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-teal-500 hover:bg-teal-600 rounded-2xl py-2 w-full transition duration-150 ease-in">
				<span>
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
					</svg>
				</span>
				<span className="mr-2 ml-2 uppercase">Gunakan {props.name}</span>
				<span>
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
					</svg>
				</span>
			</a>
		</div>
	)
}

export default TextBtn