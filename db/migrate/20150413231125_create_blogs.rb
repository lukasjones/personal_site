class CreateBlogs < ActiveRecord::Migration
  def change
    create_table :blogs do |t|
      t.text    :content
      t.string  :title

      t.timestamps null: false
    end
  end
end
