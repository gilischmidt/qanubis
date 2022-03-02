<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCodesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('codes', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('color');
            $table->string('text_color');
            $table->boolean('is_category')->default(false);
            $table->string('brief_description')->nullable();
            $table->text('description')->nullable();

            $table->foreignId('project_id')
                ->constrained()
                ->onDelete('cascade');

            $table->foreignId('parent_code_id')
                ->nullable()
                ->constrained()
                ->nullOnDelete()
                ->on('codes');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('codes');
    }
}
