import Layout from '../components/layout'

export default function Index() {
  const loginUser = async event => {
    event.preventDefault()
    // Request data from server
    const response = await fetch(
      'http://localhost:3000/users',
      {
        body: JSON.stringify({
          user_login: event.target.user_login.value,
          user_pass: event.target.user_pass.value
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    );
    const result = await response.json()
    console.log(result)
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md">
        <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
          Welcome Back!
        </div>
        <div className="mt-4 self-center text-xl sm:text-sm text-gray-800 text-center">
          Silahkan Anda login disini jika sudah memiliki username dan password
        </div>
        <div className="mt-10">
          <form onSubmit={loginUser}>
            <div className="flex flex-col mb-5">
              <label htmlFor="text" className="mb-1 text-xs tracking-wide text-gray-600">Username:</label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <i className="fas fa-user text-blue-500"></i>
                </div>

                <input id="user_login" type="text" name="user_login" className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Masukkan username di sini..." required={true} defaultValue="support" />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <label htmlFor="password" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Password:</label>
              <div className="relative">
                <div
                  className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <span>
                    <i className="fas fa-lock text-blue-500"></i>
                  </span>
                </div>

                <input id="user_pass" type="password" name="user_pass" className="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Masukkan password di sini..." required={true} defaultValue="support" />
              </div>
            </div>

            <div className="flex w-full">
              <button type="submit" className=" flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-500 hover:bg-blue-600 rounded-2xl py-2 w-full transition duration-150 ease-in">
                <span className="mr-2 uppercase">Sign In</span>
                <span>
                  <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}