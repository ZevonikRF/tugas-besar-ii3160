import { redirect } from 'next/navigation'
import { createClient } from '../../../utils/supabase/client'


const Dashboard = async () => {
        
    const supabase = await createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        console.log(error)
        return <p>errir cy=uk</p>
    }

  return <p>Hello {data.user.email}</p>
}

export default Dashboard