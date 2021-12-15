function Loading() {
	return (
		<div id="boxLoading" className="hidden text-center">
			<div className="justify-center space-x-2">
				<div className="h-24 border-2 rounded-md text-center">
					<div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
						<div className="flex flex-col space-y-3">
							<div className="w-72 bg-gray-300 h-6 rounded-md ">
							</div>
							<div className="w-48 bg-gray-300 h-6 rounded-md ">
							</div>
						</div>
					</div>
				</div>
			</div>
			<span className="text-sm">
				Robot A.I sedang melakukan kalkulasi... <i className="fa fa-brain motion-safe:animate-bounce text-red-500"></i> Biasanya 30 sampai 60 detik. Maklum, server budget hehe 🙏🏻
			</span>
		</div>
	)
}

export default Loading