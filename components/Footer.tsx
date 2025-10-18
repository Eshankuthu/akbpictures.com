export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} A.K. Brother Pictures Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
