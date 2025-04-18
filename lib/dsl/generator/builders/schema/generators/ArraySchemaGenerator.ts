/*
 * Copyright 2025 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { BaseSchemaGenerator } from "../BaseSchemaGenerator"
import { SchemaFactory } from "../interfaces"

/**
 * 배열 값의 스키마를 생성하는 클래스
 */
export class ArraySchemaGenerator extends BaseSchemaGenerator {
    private schemaFactory: SchemaFactory

    /**
     * 생성자
     * @param schemaFactory 스키마 팩토리
     */
    public constructor(schemaFactory: SchemaFactory) {
        super()
        this.schemaFactory = schemaFactory
    }

    /**
     * 배열 값으로부터 스키마를 생성합니다.
     * @param value 배열 값
     * @param includeExample 스키마에 example 포함 여부 (기본값: true)
     * @returns 생성된 스키마
     */
    public generateSchema(value: unknown, includeExample: boolean = true): Record<string, unknown> {
        const array = value as unknown[]

        if (array.length === 0) {
            return {
                type: "array",
                items: { type: "string" },
            }
        }

        const itemSchema = this.schemaFactory.createSchema(array[0], includeExample)

        const result: Record<string, unknown> = {
            type: "array",
            items: itemSchema,
        }

        return result
    }
}
