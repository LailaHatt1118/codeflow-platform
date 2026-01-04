const testimonials =[
    {
        name: "Imma Watson",
        role: "Frontend Developer",
        feedback: "CodeFlow has revolutionized my coding process. The AI suggestions are incredibly accurate and save me so much time!",
        avatar: "/p1.jpg",
    },{
        name: " Adam Smith",
        role: "Full Stack Developer",
        feedback: "The collaborative coding feature is a game-changer. It makes teamwork seamless and efficient. Highly recommend CodeFlow!",
        avatar: "/p2.jpg",
    },{
        name: "Sophie Lee",
        role: "Software Engineer",
        feedback: "I love how CodeFlow integrates with my existing tools. The workflow is smooth, and the AI assistance is top-notch.",
        avatar: "/p3.jpg",
    }
]

export default function Testimonials(){
    return  (
        <section id="testimonials" className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16">
                    {/* left side --> Header */}
                  <div className="lg:w-1/2 w-full text-center lg:text-left"> 
                      <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                          What developers are saying about Code<span className="text-blue-400">Flow</span>
                      </h2>
                      <p className="text-gray-400 text-base text-1xl sm:text-lg max-w-2xl mx-auto">
                          Hear from our community of developers who have transformed their coding experience with CodeFlow's AI-powered features.
                      </p>
                  </div>
                  {/* Right side --> testimonials */}
                  <div className="lg:w-1/2 w-full">
                  <div className="space-y-6 sm:space-y-8">
                    {testimonials.map((testimonial, key) => (
                        <div key={key} className="bg-slate-900/50 p-4 sm:p-6 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-2xl">
                            <div className="flex items-start space-x-3 sm:space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">"</div>
                                </div>
                                <div className="flex-grow">
                                    <p className="text-white text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">{testimonial.feedback}</p>
                                    {/* <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">"</div> */}
                                    <div className="flex items-center space-x-2 sm:space-x-3"> 
                                        <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"/>
                                        <div>
                                            <h4 className="font-semibold text-white text-sm sm:text-base">{testimonial.name}</h4>
                                            <p className="text-xs sm:text-sm text-gray-400">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                  </div>
                  </div>
                </div>
            </div>
        </section>
    ) ;

}