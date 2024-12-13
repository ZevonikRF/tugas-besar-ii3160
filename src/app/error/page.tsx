import Link from "next/link";

export default function ErrorPage() {
    return (
    <p>
        <Link href="login">
            <button>Maaf, terjadi kesalahan, tekan pesan ini untuk kembali</button>
        </Link>
    </p>
    
    )
}