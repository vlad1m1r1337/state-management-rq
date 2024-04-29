export const CreateUser = () => {

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const data = Object.fromEntries(new FormData(form))

        // TODO: create new user

        form.reset()
    }

    return (
        <div>
            <h1>Create User</h1>
            <form onSubmit={handleSubmit} className='mt'>
                <input name='user' type="text" placeholder='Add new user' />

                <button>Add User</button>
            </form>
        </div>
    )
}