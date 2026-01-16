import { motion } from 'motion/react'
import { forwardRef } from 'react'
import type { ClassNameProps } from '@/types/global'
import { cn } from '@/lib/utils'

type AcurveSvgProps = {
    variant?: "gradient" | "white"
} & ClassNameProps

const Acurve = forwardRef<SVGSVGElement, AcurveSvgProps>(({ className = "" }, ref) => {

    return (
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            className={cn('size-10', className)} viewBox="0 0 401.000000 266.000000"
            preserveAspectRatio="xMidYMid meet">


            <motion.g
                ref={ref}
                transform="translate(0.000000,266.000000) scale(0.100000,-0.100000)"
                className={cn(' transition-all duration-300',
                    className
                )}
                strokeWidth={100}>
                <defs>
                    <linearGradient id="fillColor" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="white" />
                        <stop offset="100%" stopColor="white" />

                    </linearGradient>
                </defs>

                <path fill='url(#fillColor)' d="M1059 2504 c-251 -45 -462 -157 -649 -344 -177 -177 -288 -377 -345
-620 -12 -55 -15 -176 -15 -757 l0 -693 36 0 c20 0 63 7 97 16 199 51 338 189
418 414 22 63 23 79 29 495 l5 430 32 73 c85 197 206 315 390 379 68 24 93 27
198 27 226 0 407 -82 519 -234 60 -81 81 -143 114 -331 l28 -159 -443 0 -443
0 0 -38 c0 -166 138 -381 299 -466 117 -61 151 -66 473 -66 217 0 290 -3 298
-12 6 -7 28 -39 48 -70 196 -302 486 -449 917 -465 168 -6 258 7 398 58 148
53 333 163 460 272 l38 32 -204 204 -205 204 -113 -46 c-225 -89 -417 -115
-551 -74 -173 53 -292 207 -373 483 -41 140 -42 176 -7 277 39 115 83 187 162
267 110 110 265 170 443 170 148 0 263 -40 384 -132 l65 -50 198 203 199 204
-37 33 c-112 98 -342 227 -497 277 -398 128 -826 19 -1158 -295 l-83 -79 -80
78 c-273 264 -693 399 -1045 335z"/>
            </motion.g>
        </svg>
    )
})

export default Acurve


export const AcurveOutlined = ({ className = "" }: ClassNameProps) => {
    return (

        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            className={cn('size-10', className)} viewBox="0 0 401.000000 266.000000"
            preserveAspectRatio="xMidYMid meet">


            <motion.g
                transform="translate(0.000000,266.000000) scale(0.100000,-0.100000)"
                className={cn(' transition-all duration-300',
                    className
                )}
                strokeWidth={100}>

                <path d="M1059 2504 c-251 -45 -462 -157 -649 -344 -177 -177 -288 -377 -345
-620 -12 -55 -15 -176 -15 -757 l0 -693 36 0 c20 0 63 7 97 16 199 51 338 189
418 414 22 63 23 79 29 495 l5 430 32 73 c85 197 206 315 390 379 68 24 93 27
198 27 226 0 407 -82 519 -234 60 -81 81 -143 114 -331 l28 -159 -443 0 -443
0 0 -38 c0 -166 138 -381 299 -466 117 -61 151 -66 473 -66 217 0 290 -3 298
-12 6 -7 28 -39 48 -70 196 -302 486 -449 917 -465 168 -6 258 7 398 58 148
53 333 163 460 272 l38 32 -204 204 -205 204 -113 -46 c-225 -89 -417 -115
-551 -74 -173 53 -292 207 -373 483 -41 140 -42 176 -7 277 39 115 83 187 162
267 110 110 265 170 443 170 148 0 263 -40 384 -132 l65 -50 198 203 199 204
-37 33 c-112 98 -342 227 -497 277 -398 128 -826 19 -1158 -295 l-83 -79 -80
78 c-273 264 -693 399 -1045 335z"/>
            </motion.g>
        </svg>
    )
}