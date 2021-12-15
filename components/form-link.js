function FormLink() {
	return (
		<div className="flex flex-col mb-2 text-center">
			<label htmlFor="text" className="mb-1 text-xs tracking-wide text-gray-600">Link Berita</label>
			<div className="relative">
				<div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
					<i className="fas fa-newspaper text-blue-500"></i>
				</div>
				<input id="url" type="text" name="url" className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Masukkan link berita di sini..." required={true} />
			</div>
		</div>
	)
}

export default FormLink