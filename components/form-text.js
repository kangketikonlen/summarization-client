function FormText() {
	return (
		<div className="flex flex-col mb-2 text-center">
			<label htmlFor="text" className="mb-1 text-xs tracking-wide text-gray-600">Input Text</label>
			<div className="relative">
				<textarea name="deskripsi" id="deskripsi" className="resize-none text-sm placeholder-gray-500 pl-4 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" rows="10" placeholder="Masukkan text panjang dari grup WhatsApp keluargamu di sini..." required={true} ></textarea>
			</div>
		</div>
	)
}
export default FormText