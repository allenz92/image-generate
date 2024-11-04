'use client'

import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"

const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Prompt is required.",
  }),
  negative_prompt: z.string().optional(),
  height: z.number().min(256).max(2048).optional(),
  width: z.number().min(256).max(2048).optional(),
  num_steps: z.number().max(20).default(20),
  strength: z.number().min(0).max(1).default(1),
  guidance: z.number().default(7.5),
  seed: z.number().int().optional(),
})


export function ImageGenerationForm() {
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
      negative_prompt: "",
      height: 512,
      width: 512,
      num_steps: 20,
      strength: 1,
      guidance: 7.5,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    try {
      const params = new URLSearchParams({
        prompt: values.prompt,
        size: `${values.width || 512}x${values.height || 512}`,
        optimization: '1',
      })

      if (values.negative_prompt) {
        params.append('negative_prompt', values.negative_prompt)
      }

      const response = await fetch(`/generate_img?${params.toString()}`)
      
      if (!response.ok) {
        throw new Error('Failed to generate image')
      }

      const blob = await response.blob()
      const imageUrl = URL.createObjectURL(blob)
      setGeneratedImage(imageUrl)
    } catch (error) {
      console.error('Error generating image:', error)
      // Here you might want to set an error state and display it to the user
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold">图像生成表单</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="prompt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>提示词</FormLabel>
                    <FormControl>
                      <Textarea placeholder="描述你想生成的图像..." {...field} />
                    </FormControl>
                    <FormDescription>
                      用于生成图像的文本描述。
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="negative_prompt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>反向提示词</FormLabel>
                    <FormControl>
                      <Textarea placeholder="描述要在图像中避免的元素..." {...field} />
                    </FormControl>
                    <FormDescription>
                      描述在生成的图像中要避免的元素。
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center space-x-2">
                <Switch id="advanced" checked={showAdvanced} onCheckedChange={setShowAdvanced} />
                <Label htmlFor="advanced">显示高级选项</Label>
              </div>

              {showAdvanced && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="height"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>高度</FormLabel>
                          <FormControl>
                            <Input type="number" min={256} max={2048} {...field} onChange={e => field.onChange(e.target.value ? Number(e.target.value) : undefined)} />
                          </FormControl>
                          <FormDescription>图像高度（像素，256-2048）</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="width"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>宽度</FormLabel>
                          <FormControl>
                            <Input type="number" min={256} max={2048} {...field} onChange={e => field.onChange(e.target.value ? Number(e.target.value) : undefined)} />
                          </FormControl>
                          <FormDescription>图像宽度（像素，256-2048）</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="num_steps"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>步数</FormLabel>
                        <FormControl>
                          <Slider
                            min={1}
                            max={20}
                            step={1}
                            value={[field.value ?? 0]}
                            onValueChange={(value) => field.onChange(value[0])}
                          />
                        </FormControl>
                        <FormDescription>扩散步数（1-20）</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="strength"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>强度</FormLabel>
                        <FormControl>
                          <Slider
                            min={0}
                            max={1}
                            step={0.01}
                            value={[field.value ?? 0]}
                            onValueChange={(value) => field.onChange(value[0])}
                          />
                        </FormControl>
                        <FormDescription>图像到图像转换强度（0-1）</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="guidance"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>引导比例</FormLabel>
                        <FormControl>
                          <Slider
                            min={0}
                            max={20}
                            step={0.1}
                            value={[field.value ?? 0]}
                            onValueChange={(value) => field.onChange(value[0])}
                          />
                        </FormControl>
                        <FormDescription>严格遵循提示词的程度</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="seed"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>种子</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} onChange={e => field.onChange(e.target.value ? Number(e.target.value) : undefined)} />
                        </FormControl>
                        <FormDescription>用于可重复性的随机种子</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              <Button type="submit" className="w-full sm:w-auto" disabled={isLoading}>
                {isLoading ? '生成中...' : '生成图像'}
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold">生成的图像</h2>
          <Card className="w-full aspect-square">
            <CardContent className="flex items-center justify-center h-full">
              {isLoading ? (
                <p className="text-muted-foreground">正在生成图像...</p>
              ) : generatedImage ? (
                <img src={generatedImage} alt="Generated image" className="max-w-full max-h-full object-contain" />
              ) : (
                <p className="text-muted-foreground">您生成的图像将显示在这里</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}