/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source:'/earlyAccess',
                destination:'https://go.banklesswallet.xyz/HW',
                permanent:true
            }
        ]
    }
}

module.exports = nextConfig
